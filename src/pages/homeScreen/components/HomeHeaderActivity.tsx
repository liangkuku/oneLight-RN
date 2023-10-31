import { useContext } from "react";
import { HomePageContext } from "../utils/context";
import { View } from "react-native";

type HomeHeaderActivityProps = {
    isAll: boolean
}

function HomeHeaderActivity({ isAll }: HomeHeaderActivityProps) {
    const { initTopbarHeight } = useContext(HomePageContext);
    return (
        <View style={{ height: isAll ? initTopbarHeight : initTopbarHeight - 90 }} />
    );
}

export default HomeHeaderActivity;