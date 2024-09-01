import MainButton from "@components/home/navigation/NavButton";
import MainImage from "@components/home/navigation/NavImage";
import NearMountain from "@components/home/recommend/NearMountain";
import RecommendMountain from "@components/home/recommend/RecommendMountain";

const HomeContainer: React.FC = () => {
    return (<>
            <MainButton />
            <MainImage />
            <hr />
            <NearMountain />
            <RecommendMountain />
        </>
    );
};

export default HomeContainer;
