import Tag from "./Tag";

export default function Tags(props) {
    return (
        <ul className="tags">
            {props.data.map((tag, index) => (
                <Tag tag={tag} index={index} />
            ))}
        </ul>
    );
}
