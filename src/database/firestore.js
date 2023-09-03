import { firestoreDb } from '@/database'

import {
	addDoc,
	arrayRemove,
	arrayUnion,
	collection,
	deleteDoc,
	deleteField,
	doc,
	endAt,
	getDoc,
	getDocs,
	limit,
	onSnapshot,
	orderBy,
	query,
	setDoc,
	startAfter,
	startAt,
	updateDoc,
	where,
	collectionGroup
} from 'firebase/firestore'

const USERS_PATH = 'fikisha_delivery_history'
const ROOMS_PATH = 'chatRooms'
const MESSAGES_PATH = 'messages'
const ORDERS_PATH ='fikisha_delivery_history'
const PRICES_PATH='fikisha_base_price';
const MPESA_PATH='mpesa_responses'
const TRANSACTIONS_PATH = 'transactions';
const COURTS_PATH= 'courts'
const RIDERS_PATH='riders'
const MESSAGE_PATH = roomId => {
	return `${ROOMS_PATH}/${roomId}/${MESSAGES_PATH}`
}

const TIMESTAMP_FIELD = 'timestamp'
const LAST_UPDATED_FIELD = 'lastUpdated'
const TYPING_USERS_FIELD = 'typingUsers'
const MESSAGE_REACTIONS_FIELD = 'reactions'
const ROOM_USERS_FIELD = 'users'

export const firestoreListener = onSnapshot
export const deleteDbField = deleteField()

const getDocuments = query => {
	return getDocs(query).then(docs => {
		return { data: formatQueryDataArray(docs), docs: docs.docs }
	})
}

const getDocument = ref => {
	return getDoc(ref).then(doc => formatQueryDataObject(doc))
}
const addDocument = (ref, data) => {
	return addDoc(ref, data)
}

const setDocument = (path, docId, data) => {
	return setDoc(doc(firestoreDb, path, docId), data)
}

const updateDocument = (ref, data) => {
	return updateDoc(ref, data)
}

const deleteDocument = (ref, docId) => {
	return deleteDoc(doc(firestoreDb, ref, docId))
}
//RIDERS
const ridersRef = collection(firestoreDb, RIDERS_PATH)
const riderRef = userId => {
	return doc(firestoreDb, RIDERS_PATH, userId)
}
export const getAllRiders = () => {
	return getDocuments(query(ridersRef))
}
export const addRider=(data)=>{
	return addDocument(ridersRef,data)
	}


export const getRider = riderId => {
	return getDocument(riderRef(riderId))
}
export const updateRider = (riderId, data) => {
	return updateDocument(riderRef(riderId), data)
}
//ORDERS
export const   getAllOrdersFromAllUsers=async()=> {
	const ordersQuery = collectionGroup(firestoreDb, 'deliveries_ordered');
	const ordersSnapshot = await getDocs(ordersQuery);
  
	// Convert snapshot to array of order objects
	const allOrders = ordersSnapshot.docs.map(doc => ({
	  id: doc.id,
	  ...doc.data(),
	  userId: doc.ref.parent.parent.id  // Gets the userId (parent document ID) for each order
	}));
  
	return allOrders;
  }

export const updateOrder = (orderId,userId, data) => {
	const orderDocRef = doc(firestoreDb, 'fikisha_delivery_history', userId, 'deliveries_ordered',orderId);
	return updateDocument(orderDocRef, data)
}

export const getStudent = userId => {
	return getDocument(studentRef(userId))
}


//PRICES
const pricesRef = collection(firestoreDb, PRICES_PATH)
const priceRef = id => {
	return doc(firestoreDb, PRICES_PATH, id)
}
export const getPrice =()=>{
	return getDocuments(query(pricesRef))
}
export const updatePrices=(id,data)=>{
	return updateDocument(priceRef(id), data)
}
//COURTS
const courtsRef = collection(firestoreDb, COURTS_PATH)
export const getAllCourts =()=>{
	return getDocuments(query(courtsRef))
}

export const courtSnapshots=()=>{
	let docs=[]
	const getData =firestoreListener(advocatesRef,(snapshot)=>{
		snapshot.forEach((doc)=>{
			docs.push({
				id: doc.id,
				...doc.data()
			  })
			  console.log(doc)
		})
	})
	return getData()
}

export const addCourt=(data)=>{
	return addDocument(courtsRef,data)
	}

// USERS
const usersRef = collection(firestoreDb, USERS_PATH)

const userRef = userId => {
	return doc(firestoreDb, USERS_PATH, userId)
}

export const getAllUsers = () => {
	return getDocuments(query(usersRef))
}

export const getUser = userId => {
	return getDocument(userRef(userId))
}
export const addUser=(values)=>{
	return setDocument(USERS_PATH,values.uid,values)
	}
export const addNewUser = data => {
	return addDocument(usersRef, data)
}

export const addIdentifiedUser = (userId, data) => {
	return setDocument(USERS_PATH, userId, data)
}

export const updateUser = (userId, data) => {
	return updateDocument(userRef(userId), data)
}

export const deleteUser = userId => {
	return deleteDocument(USERS_PATH, userId)
}
//MPESA
const mpesaRef = id => {
	return doc(firestoreDb, MPESA_PATH, id)
}
const transactionRef = id => {
	return doc(firestoreDb, TRANSACTIONS_PATH, id)
}

const transactionsRef=collection(firestoreDb, TRANSACTIONS_PATH)

export const getMpesaReference = id => {
	return getDocument(mpesaRef(id))
}

export const getTransactionReference = id => {
	return getDocument(transactionRef(id))
}
export const getTransactions=()=>{
	return getDocuments(query(transactionsRef))
}


// ROOMS
const roomsRef = collection(firestoreDb, ROOMS_PATH)

const roomRef = roomId => {
	return doc(firestoreDb, ROOMS_PATH, roomId)
}

export const roomsQuery = (currentUserId, roomsPerPage, lastRoom) => {
	if (lastRoom) {
		return query(
			roomsRef,
			where(USERS_PATH, 'array-contains', currentUserId),
			orderBy(LAST_UPDATED_FIELD, 'desc'),
			limit(roomsPerPage),
			startAfter(lastRoom)
		)
	} else {
		return query(
			roomsRef,
			where(USERS_PATH, 'array-contains', currentUserId),
			orderBy(LAST_UPDATED_FIELD, 'desc'),
			limit(roomsPerPage)
		)
	}
}

export const getAllRooms = () => {
	return getDocuments(query(roomsRef))
}

export const getRooms = query => {
	return getDocuments(query)
}

export const addRoom = data => {
	return  setDocument(ROOMS_PATH, data.id, data)
}

export const updateRoom = (roomId, data) => {
	return updateDocument(roomRef(roomId), data)
}

export const deleteRoom = roomId => {
	return deleteDocument(ROOMS_PATH, roomId)
}

export const getUserRooms = (currentUserId, userId) => {
	return getDocuments(
		query(roomsRef, where(USERS_PATH, '==', [currentUserId, userId]))
	)
}

export const addRoomUser = (roomId, userId) => {
	return updateRoom(roomId, {
		[ROOM_USERS_FIELD]: arrayUnion(userId)
	})
}

export const removeRoomUser = (roomId, userId) => {
	return updateRoom(roomId, {
		[ROOM_USERS_FIELD]: arrayRemove(userId)
	})
}

export const updateRoomTypingUsers = (roomId, currentUserId, action) => {
	const arrayUpdate =
		action === 'add' ? arrayUnion(currentUserId) : arrayRemove(currentUserId)

	return updateRoom(roomId, { [TYPING_USERS_FIELD]: arrayUpdate })
}

// MESSAGES
const messagesRef = roomId => {
	return collection(firestoreDb, MESSAGE_PATH(roomId))
}

const messageRef = (roomId, messageId) => {
	return doc(firestoreDb, MESSAGE_PATH(roomId), messageId)
}

export const getMessages = (roomId, messagesPerPage, lastLoadedMessage) => {
	if (lastLoadedMessage) {
		return getDocuments(
			query(
				messagesRef(roomId),
				orderBy(TIMESTAMP_FIELD, 'desc'),
				limit(messagesPerPage),
				startAfter(lastLoadedMessage)
			)
		)
	} else if (messagesPerPage) {
		return getDocuments(
			query(
				messagesRef(roomId),
				orderBy(TIMESTAMP_FIELD, 'desc'),
				limit(messagesPerPage)
			)
		)
	} else {
		return getDocuments(messagesRef(roomId))
	}
}

export const getMessage = (roomId, messageId) => {
	return getDocument(messageRef(roomId, messageId))
}

export const addMessage = (roomId, data) => {
	return addDocument(messagesRef(roomId), data)
}

export const updateMessage = (roomId, messageId, data) => {
	return updateDocument(messageRef(roomId, messageId), data)
}

export const deleteMessage = (roomId, messageId) => {
	return deleteDocument(MESSAGE_PATH(roomId), messageId)
}

export const listenRooms = (query, callback) => {
	return firestoreListener(query, rooms => {
		callback(formatQueryDataArray(rooms))
	})
}

export const paginatedMessagesQuery = (
	roomId,
	lastLoadedMessage,
	previousLastLoadedMessage
) => {
	if (lastLoadedMessage && previousLastLoadedMessage) {
		return query(
			messagesRef(roomId),
			orderBy(TIMESTAMP_FIELD),
			startAt(lastLoadedMessage),
			endAt(previousLastLoadedMessage)
		)
	} else if (lastLoadedMessage) {
		return query(
			messagesRef(roomId),
			orderBy(TIMESTAMP_FIELD),
			startAt(lastLoadedMessage)
		)
	} else if (previousLastLoadedMessage) {
		return query(
			messagesRef(roomId),
			orderBy(TIMESTAMP_FIELD),
			endAt(previousLastLoadedMessage)
		)
	} else {
		return query(messagesRef(roomId), orderBy(TIMESTAMP_FIELD))
	}
}

export const listenMessages = (
	roomId,
	lastLoadedMessage,
	previousLastLoadedMessage,
	callback
) => {
	return firestoreListener(
		paginatedMessagesQuery(
			roomId,
			lastLoadedMessage,
			previousLastLoadedMessage
		),
		messages => {
			callback(formatQueryDataArray(messages))
		}
	)
}

const formatQueryDataObject = queryData => {
	return { ...queryData.data(), id: queryData.id }
}

const formatQueryDataArray = queryDataArray => {
	const formattedData = []

	queryDataArray.forEach(data => {
		formattedData.push(formatQueryDataObject(data))
	})
	return formattedData
}

const lastMessageQuery = roomId => {
	return query(messagesRef(roomId), orderBy(TIMESTAMP_FIELD, 'desc'), limit(1))
}

export const listenLastMessage = (roomId, callback) => {
	return firestoreListener(query(lastMessageQuery(roomId)), messages => {
		callback(formatQueryDataArray(messages))
	})
}

export const updateMessageReactions = (
	roomId,
	messageId,
	currentUserId,
	reactionUnicode,
	action
) => {
	const arrayUpdate =
		action === 'add' ? arrayUnion(currentUserId) : arrayRemove(currentUserId)

	return updateMessage(roomId, messageId, {
		[`${MESSAGE_REACTIONS_FIELD}.${reactionUnicode}`]: arrayUpdate
	})
}
