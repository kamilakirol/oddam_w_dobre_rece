import {useContext} from 'react';
import {Link} from "react-router-dom";
import {UserContext} from "../../../../../../FirebaseAuth";

type HomeBannerButtonProps = {
    text: string
}

const HomeBannerButton = ({text} : HomeBannerButtonProps) => {
    const user = useContext(UserContext)

    return (
        <button className=' btn banner_box_buttons_btn'>
            <Link className='link banner_box_buttons_btn_link' to={user?.uid ? '/oddaj-rzeczy': 'logowanie' }>{text}</Link>
        </button>
    );
};

export default HomeBannerButton;