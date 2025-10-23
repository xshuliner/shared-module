/**
 * @type {import('cz-git').UserConfig}
 */
export default {
  // 继承 conventional 规范
  extends: ['@commitlint/config-conventional'],

  // 自定义规则
  rules: {
    // 类型枚举
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // 修复 bug
        'docs', // 文档更新
        'style', // 代码格式调整（不影响功能）
        'refactor', // 重构代码
        'perf', // 性能优化
        'test', // 测试相关
        'build', // 构建系统或外部依赖变更
        'ci', // CI/CD 配置变更
        'chore', // 其他杂项任务
        'revert', // 回滚提交
        'release', // 发布版本
        'wip', //
      ],
    ],

    // 类型不能为空
    'type-empty': [2, 'never'],

    // 类型必须小写
    'type-case': [2, 'always', 'lower-case'],

    // 主题不能为空
    'subject-empty': [2, 'never'],

    // 主题不能以句号结尾
    'subject-full-stop': [2, 'never', '.'],

    // 主题必须小写开头
    'subject-case': [2, 'always', 'lower-case'],

    // 主题最大长度
    'subject-max-length': [2, 'always', 50],

    // 主题最小长度
    'subject-min-length': [2, 'always', 10],

    // 正文每行最大长度
    'body-max-line-length': [2, 'always', 100],

    // 页脚每行最大长度
    'footer-max-line-length': [2, 'always', 100],

    // 头部最大长度
    'header-max-length': [2, 'always', 100],

    // 头部最小长度
    'header-min-length': [2, 'always', 20],
  },

  prompt: {
    types: [
      { value: 'feat', name: '✨ 新功能：新增功能' },
      { value: 'fix', name: '🐛 修复：修复缺陷' },
      { value: 'docs', name: '📚 文档：更新文档' },
      { value: 'style', name: '💄 样式：代码格式调整（不影响功能）' },
      { value: 'refactor', name: '🔧 重构：重构代码' },
      { value: 'perf', name: '⚡ 性能：性能优化' },
      { value: 'test', name: '🧪 测试：测试相关' },
      { value: 'build', name: '🔨 构建：构建系统或外部依赖变更' },
      { value: 'ci', name: '👷 CI/CD 配置变更' },
      { value: 'chore', name: '🔧 杂项：其他杂项任务' },
      { value: 'revert', name: '⏪ 回滚：回滚提交' },
      { value: 'release', name: '🚀 发布：发布版本' },
      { value: 'wip', name: '🚧 进行中：工作进行中' },
    ],
    scopes: ['root', 'cli', 'config-prettier', 'ui-react', 'utils'],
    allowCustomScopes: true,
    skipQuestions: ['body', 'footerPrefix', 'footer', 'breaking'],
    messages: {
      type: '🎯 请选择提交类型',
      scope: '📦 请选择影响范围（可选）',
      subject: '📝 请简要描述修改内容',
      body: '📄 详细描述（可选）',
      footer: '🔗 关联ISSUE',
      confirmCommit: '✅ 确认提交',
    },
  },
};
