打造综合性组件库 和 管理台

npm init vite@latest

选择 vite typescript vue


npm install -D husky # 安装husky
npx husky install    # 初始化husky
# 新增commit msg钩子
npx husky add .husky/commit-msg "node scripts/verifyCommit.js" 

#   g e e k e r e l e m e n t 
 
 


们还可以使用代码执行之前的钩子 pre-commit 去执行 ESLint 代码格式。这样我们在执行 git commit 的同时，就会首先进行 ESLint 校验，然后执行 commit 的 log 信息格式检查，全部通过后代码才能提交至 Git，这也是现在业界通用的解决方案

`npx husky add .husky/pre-commit "npm run lint"`


