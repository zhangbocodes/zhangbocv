import React from 'react'
import Item from './item.js'

const About = () => {
    const aboutArray = [
        { class: 'iconfont icon-age', title: '年龄', desc: 24 },
        { class: 'iconfont icon-sex', title: '性别', desc: '男' },
        { class: 'iconfont icon-education', title: '学历', desc: '硕士'},
        { class: 'iconfont icon-University', title: '毕业院校', desc: '北京邮电大学'},
        { class: 'iconfont icon-University uni2', title: '毕业院校', desc: '电子科技大学'},
        { class: 'iconfont icon-english', title: '英语水平', desc: 'CET-6'},
        { class: 'iconfont icon-coordinate', title: '籍贯', desc: '北京海淀'},
        { class: 'iconfont icon-intention', title: '求职意向', desc: '前端开发'},
        { class: 'iconfont icon-about', title: '电话', desc: '15801368031'}
        ]
    return (
        <div className="about-container">
            <h1 className="about-title">基本资料</h1>
            <div className="about-content">
                {aboutArray.map((message) => <Item key={message.class} message={message} />)}
            </div>
        </div>
    )
}

export default About