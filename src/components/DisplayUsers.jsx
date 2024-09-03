import React from 'react'
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
import { removeUser } from '../store/slices/UserSlice';

const DisplayUsers = () => {
  const data = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const deleteUser = (id) => {
    // console.log('id : ',id);
    dispatch(removeUser(id))
  }
  return (
    <Wrapper>
      {
        data.map((user,id) => (
          <li key={id}>
            {user}
            <button className='btn-delete' onClick={() => deleteUser(id)}>
              <MdDeleteForever className='delete-icon' />
            </button>
          </li>
        ))
      }
    </Wrapper>
  )
}

const Wrapper = styled.section`
  li{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;
    
    &:first-child{
      border-top: 1px solid #eee;
    }
  }
  
  .btn-delete{
    background-color: transparent;
    border: 0;
    color: #fff;
  }
`

export default DisplayUsers
