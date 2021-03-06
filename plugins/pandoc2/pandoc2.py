# -*- coding: utf-8 -*-

# Copyright © 2012-2013 Roberto Alsina and others.
# Small personal tastes (A.Q)

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

"""Implementation of compile_html based on pandoc.

You will need, of course, to install pandoc

"""

import codecs
import os
import subprocess
import sys


from nikola.plugin_categories import PageCompiler
from nikola.utils import req_missing, makedirs

try:
    from collections import OrderedDict
except ImportError:
    OrderedDict = None  # NOQA


class CompilePandoc(PageCompiler):
    """Compile markups into HTML using pandoc."""

    name = "pandoc"
    doc_purpose = "Pandoc with special touches"

    def compile_html(self, source, dest, is_two_file=True):
        
        sys.path.append(self.site.config['SCRIPT_FOLDER'])
        import pandy

        makedirs(os.path.dirname(dest))

        with codecs.open(source, 'rb', encoding="utf-8") as magic_file:
            new_text = magic_file.readlines()

        hasTOC, new_text = pandy.find_TOCinFile(new_text, placeholder="[TOC]", replace_with="") 
        new_text = pandy.parse_abbreviations(new_text) 
        new_text = pandy.parse_admonitions(new_text)
        new_text = "".join(new_text)

        list_command = ['pandoc','-s', '-t','html', '-o', dest]
       
        
        if hasTOC:
            list_command.append('--toc')
            list_command.append("--toc-depth=4")

        try:
            text = new_text.encode('utf-8')
            #subprocess.check_call(('pandoc','-s', '-t','html', '--toc','-o', dest, gettit))
            tmp  = subprocess.Popen(list_command, stdin=subprocess.PIPE, stdout=subprocess.PIPE)
            tmp.communicate(text)[0]

        except OSError as e:
            #pass
            if e.strreror == 'No such file or directory':
                req_missing(['pandoc'], 'build this site (#compile with pandoc)', python=False)

    def create_post(self, path, onefile=False, **kw):
        if OrderedDict is not None:
            metadata = OrderedDict()
        else:
            metadata = {}
        metadata.update(self.default_metadata)
        metadata.update(kw)
        makedirs(os.path.dirname(path))
        with codecs.open(path, "wb+", "utf8") as fd:
            if onefile:
                fd.write('<!-- \n')
                for k, v in metadata.items():
                    fd.write('.. {0}: {1}\n'.format(k, v))
                fd.write('-->\n\n')
            fd.write("Write your post here.")
