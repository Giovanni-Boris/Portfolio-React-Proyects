import "./home.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { userRequest } from "../../requestMethods";
import { useMemo, useState, useEffect } from "react";
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
    const getStats = async () => {
      try {
        const res = await userRequest.get("users/stats");
        const statsList = res.data.sort((a, b) => a._id - b._id);
        let list = [];
        statsList.map(
          (item) =>
            (list = [
              ...list,
              { name: MONTHS[item._id - 1], "New User": item.total },
            ])
        );
        setUsersStats(list);
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);
  console.log(usersStats);
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={usersStats} title="User Analytics" grid dataKey="New User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
