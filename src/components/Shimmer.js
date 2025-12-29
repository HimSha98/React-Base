const Shimmer = () => {
    return (
        <>
        <div className="filter">
            <div className="search">
                <input
                type="text"
                className="search-box"
                />
                <button>
                Search
                </button>
            </div>
            <div>
                <button className="filter-btn">
                Top Rated Restaurant
                </button>
            </div>
        </div>
        <div className="shimmer-container">
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
        </div>
        </>
    );
}

export default Shimmer;