import UserImg from '../img/testUser.jpeg';

const Chats = () => {
    return (
        <div className="chats">
            <div className="userChat">
                <img src={UserImg} alt='' />
                <div className='userChatInfo'>
                    <span>Jason</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="userChat">
                <img src={UserImg} alt='' />
                <div className='userChatInfo'>
                    <span>Jason</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="userChat">
                <img src={UserImg} alt='' />
                <div className='userChatInfo'>
                    <span>Jason</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="userChat">
                <img src={UserImg} alt='' />
                <div className='userChatInfo'>
                    <span>Jason</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="userChat">
                <img src={UserImg} alt='' />
                <div className='userChatInfo'>
                    <span>Jason</span>
                    <p>Hello</p>
                </div>
            </div>
        </div>
    )
}

export default Chats