import React, { Component } from "react";
import Link from "./Link";

class LinkList extends Component {
  render() {
    const linksToRender = [
      {
        id: "1",
        description: "Prisma turns your databese into graphql api",
        url: "https://www.prismagraphql.com"
      },
      {
        id: "2",
        description: "The back GraphQl cliend",
        url: "https://www.apolllographql.com/docs/react/"
      }
    ];
    return (
      <div>
        {linksToRender.map(link => (
          <Link key={link.id} link={link} />
        ))}
      </div>
    );
  }
}

export default LinkList;
