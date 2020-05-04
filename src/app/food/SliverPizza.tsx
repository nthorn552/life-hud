import React, { Component } from "react";

import axios, { AxiosResponse } from "axios";

type SliverPizzaProps = {
  locations: {
    name: string;
    listings: {
      ingredients: string;
      dayOfWeek: string;
    }[];
  }[];
};

type SliverPizzaResponse = AxiosResponse<
  {
    name: string;
    listings: {
      ingredients: string;
      dayOfWeek: string;
    }[];
  }[]
>;

export default class PersonList extends Component<{}, SliverPizzaProps> {
  constructor(props: SliverPizzaProps) {
    super(props);
    this.state = {
      locations: [],
    };
  }

  async componentDidMount() {
    const pizzaReport: SliverPizzaResponse = await axios.get(
      `http://localhost:5521/pizza`
    );
    console.log("PIZZA REPORT", pizzaReport.data);
    this.setState({ locations: pizzaReport.data });
  }

  createWeekMenu(
    listings: {
      ingredients: string;
      dayOfWeek: string;
    }[]
  ) {
    return listings.map(({ ingredients, dayOfWeek }, index) => {
      return (
        <li key={"ingredients" + index}>
          {dayOfWeek}: {ingredients}
        </li>
      );
    });
  }

  render() {
    return (
      <ul>
        <li>START</li>
        {this.state.locations.map(({ name, listings }, index) => {
          console.log(name);
          console.log(listings);
          return (
            <li key={"location" + index}>
              {name}
              <ul>{this.createWeekMenu(listings)}</ul>
            </li>
          );
        })}
      </ul>
    );
  }
}
