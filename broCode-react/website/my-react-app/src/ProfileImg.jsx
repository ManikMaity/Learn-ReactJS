
// eslint-disable-next-line react/prop-types
export default function ProfileImg({url = "https://picsum.photos/200/300", size = 100}){
    return (
        <img src={url} alt="profile picture" height={size} width={size} />
    )
}


