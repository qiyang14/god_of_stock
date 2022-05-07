# Welcome to the Sandbox

## APIX Integrated Development Environment (IDE) 

This is a collaborative development and test platform for rapid prototyping. Through the sandbox, developers can create and edit code, integrating APIs across different solution domains such as core banking, payments and digital currency.  

## Getting Started

To get started with your development work, here are some helpful guides for you:

1. APIX IDE supports up to 17 programming languages, including java, javascript, python, PHP etc.

2. Through the sandbox you can: 
    1. Create and edit codes to build your backend data base to your front end UI/UX.
    2. Integrate APIs you have subscribed on APIX as well as public APIs. You can also integrate your own private APIs.
    3. Create your own instance of the sandbox, collaborate together on the development work using code repository services.

3. You can also use git command to clone your existing codebase hosted on github.com or other code repository services that support git. To do so, you can:
    - Step 1: Click on the top left menu bar. Go to ‘Terminal’  and then go to ‘New Terminal’
    - Step 2: On the newly created Terminal window, type git clone with your credentials to your repository.

4. You can also write your files directly on the sandbox and create new code files as and when you need. 

## Build, Run and Showcase

Once you are done building your code, you can run your development and showcase your prototype on the sandbox by accessing  .https://qsun005-e-ntu-edu-sg.solutions.apixplatform.com

*Note: To keep the server running, you need to run the service in the background, through command prompts like nohup node index.js & where index.js is your code file.*

## Need Help?
If you’re getting stuck somewhere and need some guidance on how to use this sandbox, contact APIX at apixsupport@afin.tech 

## TODO

+打快照
+
+```bash
+git add .
+git commit -m "Your commit message"
+git branch xxyy
+```
+
+切换到某一个快照
+
+```bash
+git checkout xxx
+```
+
+查看目前所有的快照
+
+```bash
+git log --color --graph --all --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
+```
+
+对比两个快照
+
+```bash
+git diff xxx yyy