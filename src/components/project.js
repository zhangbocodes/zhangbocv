import React from 'react'
import { Timeline, Modal } from 'antd'

export default class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            src: ''
        }
        this.showModal = this.showModal.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    showModal(e) {
        this.setState({
            visible: true,
            src: e.currentTarget.getAttribute("data-src")  //兼容IE
        })
    }

    handleCancel() {
        this.setState({
            visible: false
        })
    }

    render() {
        return (
            <div className="project-container">
                <h1 className="project-title">项目经历</h1>
                <div className="project-content">
                    <Timeline>
                        <Timeline.Item>
                            <div className="project-item">
                                <div className="item-title">
                                    科技信息聚合系统网站（2016.11 - 2017.1）
                                </div>
                                <div className="item-info">
                                    <div className="item-desc">
                                        项目介绍：该项目是一个根据深网科技信息，采集整理并进行分析统计，最终以列表或者图表的形式，展示给用户的科技信息聚合网站。
                                    </div>
                                    <div className="item-desc">
                                        主要工作：在项目中主要负责web前端页面的设计与开发工作，使用angularJS框架和Echarts等工具进行科技人员和机构等页面的搭建，并在前端完成信息检索的工作。
                                    </div>
                                </div>
                            </div>
                        </Timeline.Item>
                        
                        <Timeline.Item>
                            <div className="project-item">
                                <div className="item-title">
                                    微信公众号开发（2015.11-2016.1）
                                </div>
                                <div className="item-info">
                                    <div className="item-desc">
                                        项目介绍：该项目是一个常用功能的微信公众号开发，主要包括接收和推送图文信息，位置查询，中英翻译等。
                                    </div>
                                    <div className="item-desc">
                                        主要工作：项目基于新浪云，使用php结合MySQL进行后台开发，利用第三方API完善一些生活类的服务功能。
                                    </div>
                                </div>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item>
                            <div className="project-item">
                                <div className="item-title">
                                    scrapy爬虫社交网站（2015.12-2016.3）
                                </div>
                                <div className="item-info">
                                    <div className="item-desc">
                                        项目介绍：爬取Linkedin和twitter等社交网站上的特定区域内容，并导入数据库。
                                    </div>
                                    <div className="item-desc">
                                        主要工作：使用Python的Scrapy框架爬虫，并结合Webdriver实现自动化的爬虫，完善多网页多事件触发的复杂逻辑下的爬虫。
                                    </div>
                                </div>
                            </div>
                        </Timeline.Item>
                    </Timeline>
                </div>
                <Modal title="" footer="" width="80%"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}>
                    <div className="big-img">
                        <img src={this.state.src} style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
                    </div>
                </Modal>
            </div>
        )
    }
}
