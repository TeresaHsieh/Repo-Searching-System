import React, { useState, useEffect } from "react";
import Header from "./Header";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useLazyQuery } from "@apollo/react-hooks";
import Link from "../img/link.png";

const StyledInput = styled.input`
  width: 50%;
  text-indent: 10px;
  height: 30px;
  margin: 30px;
  letter-spacing: 3px;
  color: rgb(14, 5, 68);
  border-bottom: 1px solid white;
  background-color: transparent;
  font-size: 18px;
`;

const StyledButton = styled.button`
  display: inline-block;
  border-radius: 50px;
  background: white;
  border: none;
  color: #e5627e;
  text-align: center;
  font-size: 16px;
  padding: 10px 15px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  letter-spacing: 3px;
  :hover {
    color: white;
    background: #e5627e;
  }
`;

const RepoName = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Bitter:400,400i,700&display=swap");
  font-family: "Bitter", serif;
  color: #f6456b;
  letter-spacing: 3px;
  border-radius: 35px;
  display: inline-block;
  font-size: 25px;
  margin-bottom: 10px;
`;

const RepoURL = styled.div`
  color: #808080bf;
  letter-spacing: 3px;
`;

const EachRepo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  background-color: white;
  border-radius: 10px;
  margin: 30px;
  position: relative;
  -webkit-box-shadow: 13px 10px 12px -3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 13px 10px 12px -3px rgba(0, 0, 0, 0.1);
  box-shadow: 13px 10px 12px -3px rgba(0, 0, 0, 0.1);
  padding: 10px;
`;

const UpperData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;
  margin-bottom: 30px;
`;

const BottomData = styled.div``;

const Language = styled.div`
  background-color: rgb(249, 221, 205);
  color: rgb(32, 20, 57);
  border-radius: 35px;
  display: inline-block;
  padding: 10px 15px;
  position: absolute;
  right: 20px;
  bottom: 15px;
  letter-spacing: 2px;
  font-size: 18px;
`;

const CreatedDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 24%;
  left: 30px;
`;

const CreatedYear = styled.div`
  color: #f6456b;
  font-size: 30px;
  margin-bottom: 10px;
`;

const CreatedMonth = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Bitter:400,400i,700&display=swap");
  font-family: "Bitter", serif;
  color: rgb(14, 5, 68);
  font-size: 45px;
`;

const SperateLine = styled.div`
  border-left: 1px solid rgb(144, 151, 167);
  height: 100px;
  position: absolute;
  left: 120px;
  top: 18%;
`;

const RepoInfo = styled.div`
  position: absolute;
  top: 20px;
  left: 140px;
  margin-right: 30px;
  word-break: break-all;
`;

const getRepo = gql`
  query Schema($user: String!, $curs: String) {
    user(login: $user) {
      repositories(first: 10, after: $curs) {
        edges {
          node {
            name
            createdAt
            url
            primaryLanguage {
              name
            }
          }
          cursor
        }
      }
    }
  }
`;

function Search() {
  const [
    getAccountRepo,
    { loading, data, error, fetchMore, networkStatus }
  ] = useLazyQuery(getRepo, { notifyOnNetworkStatusChange: true });

  const [inputAccount, setInputAccount] = useState("");

  const [canUpdateQuery, setCanUpdateQuery] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", fetchForMoreRepo);
    return () => {
      window.removeEventListener("scroll", fetchForMoreRepo);
    };
  });

  function fetchForMoreRepo() {
    if (data && networkStatus === 7) {
      fetchMore({
        query: getRepo,
        variables: {
          user: inputAccount,
          curs:
            data.user.repositories.edges[
              data.user.repositories.edges.length - 1
            ].cursor
        },
        updateQuery: (preResult, { fetchMoreResult }) => {
          console.log("preResult", preResult);
          console.log(fetchMoreResult);
          const preEdges = preResult.user.repositories.edges;
          const newEdges = fetchMoreResult.user.repositories.edges;
          if (preEdges[0] === newEdges[0]) {
            return preResult;
          }
          return {
            user: {
              ...preResult.user,
              repositories: {
                ...preResult.user.repositories,
                edges: [...preEdges, ...newEdges]
              }
            }
          };
        }
      });

      console.log("fetching");
    }
  }

  function updateInputState(e) {
    setInputAccount(e.target.value);
  }

  if (error) return <p> Error :( </p>;
  if (data) {
    console.log(data.user.repositories.edges);
  }

  return (
    <>
      <Header />
      <div>
        <div>
          <StyledInput
            placeholder="Type In GitHub Account"
            onBlur={e => updateInputState(e)}
          ></StyledInput>
          <StyledButton
            onClick={() => {
              getAccountRepo({ variables: { user: inputAccount } });
            }}
          >
            <div>Search</div>
          </StyledButton>
          {data
            ? data.user.repositories.edges.map((edge, key) => (
                <EachRepo key={key}>
                  <UpperData>
                    <CreatedDate>
                      <CreatedYear>
                        {edge.node.createdAt.split("", 4)}
                      </CreatedYear>
                      <CreatedMonth>
                        {edge.node.createdAt.slice(5, 7)}
                      </CreatedMonth>
                    </CreatedDate>
                    <SperateLine></SperateLine>
                    <RepoInfo>
                      <RepoName> {edge.node.name}</RepoName>
                      <RepoURL>
                        {edge.node.url}{" "}
                        <a href={edge.node.url} target="_blank">
                          {" "}
                          <img src={Link} alt="external-link" width="20px" />
                        </a>
                      </RepoURL>
                    </RepoInfo>
                  </UpperData>
                  {edge.node.primaryLanguage === null ? (
                    <Language>Unknown</Language>
                  ) : (
                    <Language>{edge.node.primaryLanguage.name}</Language>
                  )}
                </EachRepo>
              ))
            : /* <p>nothing yet...</p> */
              null}
          {/* {networkStatus === 3 ? <p>fetching...</p> : null} */}
        </div>
      </div>
    </>
  );
}

export default Search;
