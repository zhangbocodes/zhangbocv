import React from 'react'

const Home = () => {
    return (
            <div className="home-container">
                <div className="avatar-img">
                    <img src="./hehe.png" className="avatar" />
                </div>
                <div className="home-info">
                    <p className="my-name">张博</p>
                    <p className="my-word">初入江湖，请多指教。</p>
                    <p className="my-profession">前端开发工程师</p>
                    <a href="mailto:zhangbo_yjy@163.com" target="_blank" className="my-email">zhangbo_yjy@163.com</a>
                </div>
            </div>
        )
}

export default Home