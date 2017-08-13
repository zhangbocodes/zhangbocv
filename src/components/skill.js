import React from 'react'
import Item from './item.js'

const Skill = () => {
    const skillArray = [
        { class: 'iconfont icon-html', title: 'HTML', desc: '熟练运用HTML，了解使用过H5的相关特性(如canvas，storage等)。' },
        { class: 'iconfont icon-css', title: 'CSS', desc: '熟练运用CSS，对CSS3新特性有一些了解。' },
        { class: 'iconfont icon-javascript', title: 'JS', desc: '扎实的Javascript基础，熟练掌握Ajax等技术' },
        { class: 'iconfont icon-jquery', title: 'jQuery', desc: '熟练使用jQuery库简化高效JS编程。' },
        { class: 'iconfont icon-frame', title: '前端库和框架', desc: '了解angular.js和React.js框架及MVC开发模式，熟练使用Bootstrap前端UI库。' },
        { class: 'iconfont icon-Programming', title: '其他', desc: '了解PHP，nodejs，mysql，Linux的使用和基础知识，了解nvm、npm、git、nginx等开发工具的基本使用方法。' }
    ]
    return (
        <div className="skill-container">
            <h1 className="skill-title">专业技能</h1>
            <div className="skill-content">
                {skillArray.map((message) => <Item key={message.class} message={message} />)}
            </div>
        </div>
    )
}

export default Skill