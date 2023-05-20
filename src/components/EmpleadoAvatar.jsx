import Image from 'react-bootstrap/Image';
const EmpleadoAvatar = ({avatar}) => {
    return (
        <Image src={avatar} roundedCircle className='EmpleadoAvatar'/>
    );
};

export default EmpleadoAvatar;