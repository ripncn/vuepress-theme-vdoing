(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{540:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"rebase分支合并"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rebase分支合并"}},[s._v("#")]),s._v(" rebase分支合并")]),s._v(" "),t("h2",{attrs:{id:"说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[s._v("#")]),s._v(" 说明")]),s._v(" "),t("p",[s._v("以下 "),t("code",[s._v("v2")]),s._v(" 是某个需求的开发分支， "),t("code",[s._v("dev")]),s._v("是总的开发分支，"),t("code",[s._v("v2")]),s._v(" 是基于"),t("code",[s._v("dev")]),s._v("分支签出的。")]),s._v(" "),t("p",[s._v("当完成"),t("code",[s._v("v2")]),s._v("的开发后，需要把代码合并到"),t("code",[s._v("dev")]),s._v("，我们可以使用"),t("code",[s._v("rebase")]),s._v("进行合并：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 首先将 v2 push到远程仓库")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin v2\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到 dev 拉取最新代码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout dev\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin dev\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到 v2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout v2\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase dev "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 v2 的所有[commit] 变基到(应用到) dev")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到 dev")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout dev\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge v2  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 dev分支 快进合并 （此时 (HEAD -> dev, v2) [commit] 两个分支指向同一个提交）")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 原v2的[commit]记录 是否在dev分支的最前面（变基成功会把v2的提交记录应用到dev分支的最前面）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log\n\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果到这一步发现有问题，尝试使用 git --abort中止变基，如果还是有问题的可以在dev分支上使用《后悔药》操作， 再到v2分支上使用《后悔药》操作，即可使两个分支都回退到 rebase变基 之前的状态")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 试运行项目是否有问题")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" start\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看状态是否有问题")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin dev "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送到远程仓库的 dev")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br")])]),t("h3",{attrs:{id:"变基要遵守的准则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变基要遵守的准则"}},[s._v("#")]),s._v(" 变基要遵守的准则")]),s._v(" "),t("p",[t("strong",[s._v("几个人同时在一个分支上进行开发和提交时，开发中途请不要私自执行变基，只有在大家都完成工作之后才可以执行变基。")])]),s._v(" "),t("h3",{attrs:{id:"变基的实质"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变基的实质"}},[s._v("#")]),s._v(" 变基的实质")]),s._v(" "),t("p",[s._v("变基操作的实质是丢弃一些现有的提交，然后相应地新建一些内容一样但实际上不同的提交。\n因此，"),t("strong",[s._v("变基操作过后的分支将不要再使用")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"后悔药"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#后悔药"}},[s._v("#")]),s._v(" 后悔药")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看HEAD指针变动记录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reflog\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 记录示例(当前分支是v2):")]),s._v("\n07c398f "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" v2, master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" HEAD@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": checkout: moving from master to v2\n07c398f "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" v2, master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" HEAD@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": rebase "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("finish"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": returning to refs/heads/master\n07c398f "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" v2, master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" HEAD@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": rebase "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("start"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": checkout v2\n15a97d8 HEAD@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": reset: moving to 15a97d8\n07c398f "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" v2, master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" HEAD@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": merge v2: Fast-forward\n15a97d8 HEAD@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": checkout: moving from v2 to master\n07c398f "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" v2, master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" HEAD@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": rebase "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("finish"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": returning to refs/heads/v2\n07c398f "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" v2, master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" HEAD@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": rebase "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pick"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": C\n15a97d8 HEAD@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": rebase "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("start"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": checkout master "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 首次rebase")]),s._v("\nd278ecd HEAD@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": checkout: moving from master to v2 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rebase前的状态")]),s._v("\n15a97d8 HEAD@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": commit: D\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可见，示例中最初的 rebase 操作是 HEAD@{8}，想回退到变基前的状态需让指针指向 HEAD@{9}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--hard")]),s._v(" d278ecd  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重置当前分支的HEAD为指定[commit]，同时重置暂存区和工作区，与指定[commit]一致")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此时打印 log 查看是否回到之前的状态")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("p",[t("strong",[s._v("注意：此操作只能回退当前的分支，如其他分支也要回退，需要切换到该分支并执行上面操作。")])]),s._v(" "),t("h2",{attrs:{id:"开发期间的rebase操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发期间的rebase操作"}},[s._v("#")]),s._v(" 开发期间的rebase操作")]),s._v(" "),t("h3",{attrs:{id:"背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[s._v("#")]),s._v(" 背景")]),s._v(" "),t("p",[s._v("有两个分支：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("dev\n*v2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("code",[s._v("v2")]),s._v(" 是基于"),t("code",[s._v("dev")]),s._v("切出来的。")]),s._v(" "),t("p",[s._v("提交记录如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\t\tdev\na - b - c\n\t\tv2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("开发期间，两个分支同时有新的commit ：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\t\t\t\tdev\na - b - c - d - e\n\t\t\\ - f - g\n\t\t\t\tv2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("当前你正在"),t("code",[s._v("v2")]),s._v("进行开发，"),t("code",[s._v("dev")]),s._v("也同时进行开发，并有重大的改变，你需要把"),t("code",[s._v("dev")]),s._v("的提交同步到"),t("code",[s._v("v2")]),s._v("。")]),s._v(" "),t("p",[t("strong",[s._v("需求： 把"),t("code",[s._v("dev")]),s._v("中新的提交同步到"),t("code",[s._v("v2")]),s._v("，且不能影响"),t("code",[s._v("dev")]),s._v("分支。")])]),s._v(" "),t("h3",{attrs:{id:"操作步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤"}},[s._v("#")]),s._v(" 操作步骤")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("基于最新的 "),t("code",[s._v("dev")]),s._v(" 切一个新的分支 "),t("code",[s._v("dev-copy")])]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("dev-copy")]),s._v(" 和 "),t("code",[s._v("dev")]),s._v("  两者的 commit ID 一致。")])])]),s._v(" "),t("li",[t("p",[s._v("在"),t("code",[s._v("dev-copy")]),s._v("中执行rebase，将 "),t("code",[s._v("dev-copy")]),s._v(" 的提交变基到 "),t("code",[s._v("v2")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase v2 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 dev-copy 的提交[commit] 变基到(应用到) v2")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("删除原"),t("code",[s._v("v2")]),s._v("分支，将"),t("code",[s._v("dev-copy")]),s._v("分支名改为"),t("code",[s._v("v2")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当前在 dev-copy 分支")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" v2 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除分支")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" dev-copy v2 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重命名")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])]),s._v(" "),t("h2",{attrs:{id:"git-cherry-pick"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-cherry-pick"}},[s._v("#")]),s._v(" git cherry-pick")]),s._v(" "),t("p",[s._v("来源："),t("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("《git cherry-pick 教程》"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("用于将单个或几个"),t("code",[s._v("[commit]")]),s._v("复制到另一个分支。")]),s._v(" "),t("h3",{attrs:{id:"基本应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本应用"}},[s._v("#")]),s._v(" 基本应用")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cherry-pick "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("commitHash"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将commitHash应用于当前分支")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("上面命令就会将指定的提交"),t("code",[s._v("commitHash")]),s._v("，应用于当前分支。这会在当前分支产生一个新的提交，当然它们的"),t("strong",[s._v("哈希值会不一样")]),s._v("。")]),s._v(" "),t("p",[s._v("git cherry-pick命令的参数，不一定是提交的哈希值，分支名也是可以的，表示转移该分支的最新提交。")]),s._v(" "),t("h3",{attrs:{id:"转移多个提交"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#转移多个提交"}},[s._v("#")]),s._v(" 转移多个提交")]),s._v(" "),t("p",[s._v("Cherry pick 支持一次转移多个提交。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cherry-pick "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("HashA"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("HashB"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# A和B提交")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("上面的命令将 A 和 B 两个提交应用到当前分支。这会在当前分支生成两个对应的新提交。")]),s._v(" "),t("p",[s._v("如果想要转移一系列的连续提交，可以使用下面的简便语法。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cherry-pick A"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("B "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# A到B提交，不包含A")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("上面的命令可以转移从 A 到 B 的所有提交。它们必须按照正确的顺序放置：提交 A 必须早于提交 B，否则命令将失败，但不会报错。")]),s._v(" "),t("p",[t("strong",[s._v("注意，使用上面的命令，提交 A 将不会包含在 Cherry pick 中。如果要包含提交 A，可以使用下面的语法。")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cherry-pick A^"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("B "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# A到B提交，包含A")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);