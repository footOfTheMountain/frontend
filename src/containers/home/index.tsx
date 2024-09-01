
import MobileLayout from "@components/layout/MobileLayout";
import MainButton from "./navigation/MainButton";
import MainImage from "./navigation/MainImage";

const HomeContainer: React.FC = () => {
    return (
        <MobileLayout>
            <MainButton />
            <MainImage />
            <hr />
        </MobileLayout>
    );
};

export default HomeContainer;
