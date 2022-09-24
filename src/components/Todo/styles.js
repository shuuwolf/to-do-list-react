import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: #212124;
    display: grid;
    place-items: center;

    ul{
        background: #ccc;
        padding: 0;
        list-style-type: none;
        padding: 1rem;
        border-radius: 1rem;
        min-width: 300px;
        max-width: 500px;
        width: 100%;

        li{
            display:flex;
            align-items: center;
            justify-content: space-between;
            border-bottom:1px solid #ccc;
        
            & + li{
                margin-top: 20px;
            }

            & > div{
                display:flex;
            }

            Button{
                display: flex;
                justify-content: center;
                background-color: white;
                padding: 10px 0;
                transition:color 0.3s;
                min-width: 40px;
                
                span{
                    margin:0;
                }

                svg{
                    color:black;
                }

                &:hover{
                    background-color: black;

                    svg{
                        color:white;
                    }
                }

                & + Button{
                    margin-left:10px;
                }
            }
        }
    }
`

export const ButtonContainer = styled.div`
    display:flex;
`