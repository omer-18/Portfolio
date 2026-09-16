const TitleHeader = ({ title, sub }) => {
    return (
        <div className="flex flex-col items-center gap-5">
            {sub && (
                <div className="hero-badge">
                    <p>{sub}</p>
                </div>
            )}
            <div>
                <h1 className="font-heading italic font-semibold md:text-[42px] text-[26px] text-center">
                    {title}
                </h1>
            </div>
        </div>
    );
};

export default TitleHeader;