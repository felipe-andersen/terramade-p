import React from 'react';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';



export const CommentsView = styled.View`
width: 100%;
height: 100%;
background-color: rgba(250, 250, 250,1);
`;

export const AllCommentsScrollView = styled.ScrollView`
width: 100%;
height: 100%;
background-color: rgba(250, 250, 250,1);
padding: ${RFValue(25)}px ${RFValue(15)}px ${RFValue(25)}px ${RFValue(15)}px;
`;

export const ListOption = styled.View`
width: 100%;
height: ${RFPercentage(100)}px;
position: absolute;
justify-content: flex-end;
background-color: green;
`;


export const CommentOne = styled.View`
width: 100%;
flex-direction: row;
`;

export const AuthorPhoto = styled.TouchableOpacity`
width: ${RFValue(40)}px;
height: ${RFValue(40)}px;
background-color: yellow;
border-radius: ${RFValue(20)}px;
`;

export const CommentContentBtnsView = styled.View`
padding: ${RFValue(0)}px ${RFValue(0)}px ${RFValue(8)}px ${RFValue(8)}px;
`;

export const CommentAuthorName = styled.TouchableOpacity`
width: ${RFPercentage(49)}px;
height: ${RFPercentage(6)}px;
flex-direction: row;
justify-content: space-between;

padding: ${RFValue(0)}px ${RFValue(0)}px ${RFValue(8)}px ${RFValue(0)}px;
`;

export const CommentContent = styled.Text`
background-color: rgba(220, 220, 220,1);
padding: ${RFValue(8)}px ${RFValue(8)}px ${RFValue(8)}px ${RFValue(8)}px;
`;

export const CommentBtns = styled.View`
width: ${RFPercentage(49)}px;
height: ${RFPercentage(6)}px;

`;

export const ResponseBtn = styled.View`


`;

export const UtilsBtn= styled.View`


`;

export const CommentImputViewFixed = styled.View`
width: 100%;
height: ${RFPercentage(100)}px;
position: absolute;
justify-content: flex-end;
background-color: green;
`;

export const PhotoCommentView = styled.View`
width:100%;
height: ${RFValue(50)}px;
flex-direction: row;
justify-content: space-between;
align-items:center;

`;




export const CommentImput = styled.TextInput`
background-color: rgba(220, 220, 220,1);
`;

export const AttachmentBtnsView = styled.View`
width: 100%;
height:  ${RFValue(50)}px;
flex-direction: row;
`;

export const PhotoGifView = styled.View`
width: ${RFValue(100)}px;
flex-direction: row;
`;

export const AttachmentImgPhotoBtn = styled.Text`
margin: ${RFValue(0)}px ${RFValue(0)}px ${RFValue(0)}px ${RFValue(0)}px;
`;

export const AttachmentGifBtn = styled.Text`
margin: ${RFValue(0)}px ${RFValue(0)}px ${RFValue(0)}px ${RFValue(0)}px;
`;

export const SendCommentBtn = styled.Text`
margin: ${RFValue(0)}px ${RFValue(0)}px ${RFValue(0)}px ${RFValue(0)}px;
`;

export const AnimatedAlertAgainComment = styled(RectButton)`
display: none;
width:  ${RFValue(100)}px;
height: ${RFValue(40)}px;
position: absolute;

`;