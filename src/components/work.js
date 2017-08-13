import React from 'react'
import { Timeline, Modal } from 'antd'

export default class Work extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            src: ''
        }
    }


    render() {
        return (
            <div className="project-container">
                <h1 className="project-title">实习经历</h1>
                <div className="project-content">
                    <Timeline>
                        <Timeline.Item>
                            <div className="project-item">
                                <div className="item-title">
                                    北京百度网讯科技有限公司（2017.5-2017.8）
                                </div>
                                <div className="item-info">
                                    <div className="item-desc">
                                        工作描述：
                                    </div>
                                    <div className="item-desc">
                                        1.负责狼烟，策略推演等风控平台的前后端开发，使用echarts，bootstrap-table，x-editable等完成了诸如群体账户画像，消费监控等功能，在前端进行了一定的数据逻辑处理。
                                    </div>
                                    <div className="item-desc">
                                        2.负责Ucard平台的前端开发，完成评论筛选，首页检索，健康度展示等功能。
                                    </div>
                                    <div className="item-desc">
                                        3.负责COP质量平台的前后端开发，主要对部门各产品线质量情况进行统计分析，并以心电图，蜂窝图等形式对指标进行多维度展示。
                                    </div>
                                </div>
                            </div>
                        </Timeline.Item>
                        
                        <Timeline.Item>
                            <div className="project-item">
                                <div className="item-title">
                                    去哪儿网（2017.4-2017.5）
                                </div>
                                <div className="item-info">
                                    <div className="item-desc">
                                        工作描述：
                                    </div>
                                    <div className="item-desc">
                                        1.使用nodejs和React完成机票touch端填单页和Logadmin平台的部分功能开发,如自动复制到剪贴板，自动保存图表到本地，自动发送邮件等。
                                    </div>
                                </div>
                            </div>
                        </Timeline.Item>
                    </Timeline>
                </div>
            </div>
        )
    }
}
