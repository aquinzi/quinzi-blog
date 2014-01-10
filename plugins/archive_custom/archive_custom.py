# -*- coding: utf-8 -*-

# Copyright © 2012-2013 Roberto Alsina and others.
# Tweaked by Joshua Barratt (original idea)
# (https://github.com/jbarratt/serialized-nikola/blob/master/plugins/task_archive.py)
# Modified by A.Q.

# Permission is hereby granted, free of charge, to any
# person obtaining a copy of this software and associated
# documentation files (the "Software"), to deal in the
# Software without restriction, including without limitation
# the rights to use, copy, modify, merge, publish,
# distribute, sublicense, and/or sell copies of the
# Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice
# shall be included in all copies or substantial portions of
# the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
# KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
# WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
# PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
# OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
# OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
# OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
# SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import os

import nikola.utils
from nikola.plugin_categories import Task
from nikola.utils import config_changed

# If locales were not configurated in config when in windows, use below and uncomment the line with months in gen_tasks
#months = { 'en' : ('january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'), 'es' : ('enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre') }


class Archive(Task):
    """Render the post archives."""

    name = "render_archive"

    def set_site(self, site):
        site.register_path_handler('archive', self.archive_path)
        return super(Archive, self).set_site(site)

    def archive_path(self, name, lang):
        if name:
            return [_f for _f in [self.site.config['TRANSLATIONS'][lang],
                                  self.site.config['ARCHIVE_PATH'], name,
                                  self.site.config['INDEX_FILE']] if _f]
        else:
            return [_f for _f in [self.site.config['TRANSLATIONS'][lang],
                                  self.site.config['ARCHIVE_PATH'],
                                  self.site.config['ARCHIVE_FILENAME']] if _f]

    def gen_tasks(self):
        kw = {
            "messages": self.site.MESSAGES,
            "translations": self.site.config['TRANSLATIONS'],
            "output_folder": self.site.config['OUTPUT_FOLDER'],
            "filters": self.site.config['FILTERS'],
            "create_monthly_archive": self.site.config['CREATE_MONTHLY_ARCHIVE'],
            "create_single_archive": self.site.config['CREATE_SINGLE_ARCHIVE'],
        }

        self.site.scan_posts()
        template_name = "archive.tmpl"

        for lang in kw["translations"]:
            output_name = os.path.join(
                kw['output_folder'], self.site.path("archive", None, lang))

            context = {"listing": {}}
            all_posts = []


            for yearmonth, posts in sorted(list(self.site.posts_per_month.items()), reverse=True):

                year, month = yearmonth.split("/")
            
                post_list = [self.site.global_data[post] for post in posts]
                post_list.sort(key=lambda a: a.date)
                post_list.reverse()
                all_posts += post_list

                if not year in context["listing"]:
                    context["listing"][year] = []

                context["listing"][year].append({
                    #"month" : months[lang][int(month)-1],
                    "month" : nikola.utils.LocaleBorg().get_month_name(int(month), lang),
                    "posts" : post_list
                    })           

            context["lang"] = lang
            context["title"] = kw["messages"][lang]["Archive"]
            context["permalink"] = self.site.link("archive", None, lang)

            task = self.site.generic_post_list_renderer(
                lang,
                all_posts,
                output_name,
                template_name,
                kw['filters'],
                context,
            )

            task_cfg = {1: task['uptodate'][0].config, 2: kw}
            task['uptodate'] = [config_changed(task_cfg)]
            task['basename'] = self.name

            yield task
