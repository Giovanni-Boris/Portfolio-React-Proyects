import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useState, useEffect, useMemo } from "react";
import { userRequest } from "../../requestMethod";

const Home = () => {
  const [usersStats, setUsersStats] = useState([]);
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    console.log("Rendering");
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        let arr = [];
        res.data.map(
          (item) =>
            (arr = [
              ...arr,
              { name: MONTHS[item._id - 1], "Active User": item.total },
            ])
        );
        setUsersStats(arr);
      } catch {}
    };
    getStats();
  }, [MONTHS]);

  //console.log(usersStats);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={usersStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
