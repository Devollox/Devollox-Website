import Image from "next/image";

export default function Card(props: any) {
    return (
        <div>
            <h1 title={props.name}>Привет, {props.name}</h1>
            <h1>Привет, {props.LastName}</h1>
            <div className="UserInfo-name">
                {props.author}
            </div>
        </div>
    )
}