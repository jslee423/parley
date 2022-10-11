import UserImg from '../img/testUser.jpeg';

const Message = () => {
    return (
        <div className='message owner'>
            <div className="messageInfo">
                <img src={UserImg} alt='' />
                <span>just now</span>
            </div>
            <div className="messageContent">
                <p>hello</p>
                <img src={UserImg} alt='' />
            </div>
        </div>
    )
}

export default Message