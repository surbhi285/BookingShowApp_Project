import { Typography, Button, Flex, Divider } from "antd";
import React, { useEffect, useState } from "react";
import {
  EnvironmentFilled,
  InfoCircleFilled,
  HeartOutlined,
} from "@ant-design/icons";
import { useParams } from "react-router-dom";

const filterShows = (shows, showSearch) => {
  return shows.filter((show) => {
    if (
      !showSearch ||
      ((!showSearch.language ||
        showSearch.language.every((language) =>
          show.language.includes(language)
        )) &&
        (!showSearch.location ||
          showSearch.location.every((location) =>
            show.venue.includes(location)
          )))
    )
      return true;
    return false;
  });
};
const ShowsList = ({ showSearch, shows, events, showModal }) => {
  const [filteredShow, setFilteredShow] = useState(null);

  useEffect(() => {
    if (showSearch && shows) {
      let filteredEvents = filterShows(shows, showSearch);
      console.log("filtered", filteredEvents);
      setFilteredShow(filteredEvents);
    }
  }, [shows, showSearch]);

  return (
    <>
      {filteredShow && filteredShow.length > 0 ? (
        filteredShow.map((show, index) => (
          <Show
            key={show.showId}
            show={show}
            events={events}
            index={show.showId}
            showModal={showModal}
          />
        ))
      ) : (
        <div>No event found</div>
      )}
    </>
  );
};

const Show = ({ show, events, showModal }) => {
  const { id } = useParams();

  const findEvent = (categoryId) => {
    return events.find((event) => event.eventId === categoryId);
  };
  const event = findEvent(show.categoryId);

  return (
    <>
      {id && (
        <>
          <Typography.Title style={{ marginLeft: "50px", marginTop: "50px" }}>
            {event.eventName}
          </Typography.Title>
          <Button
            style={{
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              padding: 0,
              marginLeft: "50px",
              marginRight: "20px",
              color: "#6C6C6C",
              boxShadow: "5px 5px",
            }}
          >
            {event.censorBoardRating}
          </Button>
          {event.genres.map((genre) => (
            <Button
              style={{
                height: "40px",
                color: "rgb(220, 53, 75)",
                fontSize: "20px",
                marginRight: "10px",
              }}
            >
              {genre}
            </Button>
          ))}
          <Flex style={{ marginLeft: "10%", marginTop: "20px" }}>
            {event.language.map((language) => (
              <Button
                style={{
                  height: "30px",
                  marginLeft: "20px",
                  color: "rgb(220, 53, 75)",
                }}
              >
                {language}
              </Button>
            ))}
          </Flex>
        </>
      )}
      <Divider />
      <Flex>
        <Typography.Title level={4} style={{ width: "50%", marginLeft: "3%" }}>
          <HeartOutlined style={{ marginRight: "10px", color: "grey" }} />
          {event.eventName}
        </Typography.Title>
        <Button
          onClick={showModal}
          style={{ marginTop: "30px", color: "#4ABD5D", height: "40px" }}
        >
          {show.timing}
        </Button>
      </Flex>
      <Typography>
        <EnvironmentFilled
          style={{ color: "#fdd835", marginLeft: "5%", marginRight: "5px" }}
        />
        {show.venue}
      </Typography>
      <Typography style={{ color: "#6C6C6C" }}>
        <InfoCircleFilled
          style={{
            marginLeft: "52%",
            width: "10px",
            marginRight: "10px",
            color: "#FFC610",
          }}
        />
        Non-Cancellable
      </Typography>
    </>
  );
};
export default ShowsList;
