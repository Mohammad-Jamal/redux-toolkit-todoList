import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteUsers } from "../store/actions/index";

export const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const clearUsers= () => {
    console.log('delete all');
    dispatch(deleteUsers())
  }
  return <Wrapper>
    <button className="btn clear-btn" onClick={() => clearUsers()}>Clear Users</button>
  </Wrapper>;
};

const Wrapper = styled.section`
  .clear-btn{
    text-transform: capitalize;
    background-color: #db338a;
    margin-top:2rem;
  }
`