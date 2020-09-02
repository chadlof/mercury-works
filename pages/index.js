import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import { styled as styledUI } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'


const Wrapper = styled.div`
display:flex;
flex-flow:column;
justify-content: center;
align-items: center;
`
const HeaderWrapper = styled.div`
display:flex;
justify-content: space-between;
width: 60%;
align-items: center;
margin: 100px auto 60px;
padding-bottom:20px;
border-bottom: solid 1px #cccbcb;
`
const GetJokeButton = styledUI(Button)({
  background: '#92d292',
  border: 0,
  borderRadius: 20,
  color: 'white',
  height: 48,
  padding: '0 30px',
  fontSize: 10,
})
const HideJokeButton = styledUI(Button)({
  background: '#6facd2',
  border: 0,
  borderRadius: 20,
  color: 'white',
  height: 48,
  padding: '0 30px',
  fontSize: 10,
  margin: 60,
})


const APILinkButton = styledUI(Button)({
  fontSize: 10,
})


export default function App() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://official-joke-api.appspot.com/random_joke').then(res =>
      res.json()
    )
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
console.log({data})
  return (


    <Wrapper>
      <HeaderWrapper>
          <GetJokeButton variant="contained">Get a new Random Joke</GetJokeButton>
          <APILinkButton href="https://github.com/15Dkatz/official_joke_api" color="primary"> View API Docs </APILinkButton>
      </HeaderWrapper>
     

      <h1>{data.setup}</h1>
      <HideJokeButton variant="contained">Hide Punchline</HideJokeButton>
      <p>{data.punchline}</p>

    </Wrapper>
  )
}