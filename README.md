# MyProject

Git steps :
A.	Start with login to Epsilon GitHub and forking teamRepo of the relevant project to your account.
B.	git clone git@github01.epsilon.com:username/core.git   - download forked repo 
C.	git remote add teamRepo  git@github01.epsilon.com:harmony/core.git  - add teamRepo remote repository alias to help you to sync up 
D.	git remote –v   - verify your remotes
E.	git branch def1234  - create new branch def1234
F.	git checkout def1234 – switch to new branch
make changes :
       1.git add <file>    ( stages changed files for commit = makes git to truck them )
       2.git commit –m “commit my change”      ( saves your state locally , meaning you can go back to it if not satisfied with your following changes )
       3.git status  (shows your local repo is ahead of remote origin)
       Make more changes if required. Follow 1-3 steps above. 
G.	git fetch teamRepo   - sync up with teamRepo
H.	git checkout master – switch to master branch
I.	git merge teamRepo/master  - merge changes from teamRepo to your forked repo
J.	git push origin master – push latest changes to remote forked repo
K.	git checkout def1234   - switch back to your defect branch
L.	git rebase master ( or git rebase –interactive master ) – merges your changes on top of master code ( same code result as for merge but cleaner log history )
M.	git push origin def1234
