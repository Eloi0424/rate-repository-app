import {Text} from 'react-native';



const RepositoryItem = (props) => {
	return (
		<>
			<Text>Full name: {props.item.fullName}</Text>
			<Text>Description: {props.item.description}</Text>
			<Text>Language: {props.item.language}</Text>
			<Text>Stars: {props.item.stargazersCount}</Text>
			<Text>Forks: {props.item.forksCount}</Text>
			<Text>Reviews: {props.item.reviewCount}</Text>
			<Text>Rating: {props.item.ratingAverage}</Text>
		</>
	)
}



export default RepositoryItem;