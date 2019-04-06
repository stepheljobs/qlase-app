import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: white;
  border-radius: 4px;
  padding: 8px;
  display: flex;
  width: calc(50% - 32px);
  border: 1px solid #CCC;
  justify-content: space-between;
`

const Search = styled.input`
  background-color: #F6F6F6;
  width: 24em;
  height: 24px;
  border: 0;
  border-radius: 4px;
  padding: 8px;

  :focus {
    outline:none;
  }

`

const FilterGroup = styled.div``
const FilterButton = styled.button`
  background-color: #7E69FA;
  border: 1px solid #FFFFFF;
  color: white;
  padding: 10px 24px;
  cursor: pointer;
  float: left;

  :not(:last-child) {
    border-right: none;
  }

  :after {
    content: "";
    clear: both;
    display: table;
  }
`

export default class SearchFilter extends Component {

  render() {
    return (
      <Wrapper>
          <Search placeholder="Search student name"/>
          <FilterGroup>
            <FilterButton>Present</FilterButton>
            <FilterButton alert>Absent</FilterButton>
          </FilterGroup>
      </Wrapper>
    )
  }
}
