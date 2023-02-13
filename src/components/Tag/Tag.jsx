export default function Tag({ tag, index }) {
    return (
        <li className="tag" key={`${tag}-${index}`}>
            {tag}
        </li>
    );
}
