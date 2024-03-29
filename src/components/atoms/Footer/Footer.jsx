// import Card from 'react-bootstrap/Card';

import { Card } from "react-bootstrap";
import ThemeSwither from "../ThemeSwitcher";

const Footer = () => {
    return (
        <Card className="fixed-bottom text-center" style={{ width: '100%' }}>
            <Card.Body>
                <Card.Title>Этот футер я сам сделал</Card.Title>
                <Card.Text>
                    А тут если хочешь, поменяй тему
                    <ThemeSwither />
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Footer;