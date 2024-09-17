import { Card_Homepage } from "../components/Card_Homepage"
import Icon from "../assets/photo_6003374028309514589_y300.jpg";
export default function Testing() {
    return (
        <div className={'font-primaryBold text-2xl'}>
            <h1>page for testing your codes</h1>
            <Card_Homepage title="iphone" imgsrce={Icon} />
        </div>
    )
}