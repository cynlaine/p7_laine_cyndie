export default function Rating(props) {
    const value = props.value;
    const range = [1, 2, 3, 4, 5];

    return (
        <>
            {range.map((rangeElem, index) =>
                value >= rangeElem ? (
                    <span className="star" key={`${rangeElem}-${index}`}>
                        &#9733;
                    </span>
                ) : (
                    <span className="star--empty" key={`${rangeElem}-${index}`}>
                        &#9733;
                    </span>
                )
            )}
        </>
    );
}
