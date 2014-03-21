import subprocess
import os 
import sys
import time

commit_msg = "Publication on {date}"
path_pages = "../ghpages"
source_dir = "_output/"
#git_branch_pages = "gh-pages"
git_branch_pages = "gh-pages:gh-pages"
git_origin = "origin"


"""
git_status = subprocess.check_output("git status", shell=True)
git_status = git_status.splitlines()[1:] #first line is which branch

if not "nothing to commit" or not "directory clean" in git_status[0]:
	print "Awaiting changes"
	exit()
"""

if not os.path.exists(path_pages) or not os.path.exists(source_dir):
	print (" directory doesn't exist")
	exit()

# get commit message
user_input = raw_input(" commit message (default: " + commit_msg + "): \n  ")

if user_input:
	commit_msg = user_input
	
commit_msg = commit_msg.format(date=time.strftime("%Y-%m-%d", time.localtime()))

# sync source and destination
subprocess.check_call("rsync -rav --delete --exclude=.git --exclude='Thumbs.db' {source} {dest}".format(source=source_dir,dest=path_pages), shell=True)

# go to destination and do git stuff
os.chdir(path_pages)

subprocess.check_call("git add .", shell=True)
subprocess.check_call('git commit -am "{msg}"'.format(msg=commit_msg), shell=True)
subprocess.check_call("git push {origin} {branch}".format(origin=git_origin, branch=git_branch_pages), shell=True)
