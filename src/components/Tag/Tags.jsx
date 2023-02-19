import Tag from "./Tag";

export default function Tags(props) {
    return (
        <div className="tags">
            {props.data.map((tag, index) => (
                <Tag key={`${tag}-${index}`} tag={tag} />
            ))}
        </div>
    );
}
