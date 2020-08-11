import React, {useState} from 'react';
import {MDBBtn, MDBRow, MDBCardBody, MDBCol, MDBCard, MDBCardImage, MDBCardTitle, MDBCardText } from "mdbreact";
import Geocode from 'react-geocode'
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";

import '../CompanyPage/Map/Search.css'
import "@reach/combobox/styles.css";

import mapStyles from "../CompanyPage/Map/mapStyles";
Geocode.setApiKey("AIzaSyCrQuKKwt0DtPF8vxKPx6dRq3us6me2LO8");
Geocode.setLanguage('ko')
const libraries = ["places"];
const mapContainerStyle = {
    height: "55vh",
    width: "45vw",
};
const options = {
    styles: mapStyles,
};
const center = {
    lat: 37.42466,
    lng: 126.64249,
};
const locations = [
    {
        name: "문강태님 중고거래 희망위치",
        location: {
            lat:  37.42506,
            lng: 126.66403,
        }
    },

];

const CustomerInfoMarket=()=> {
    const [searchMarker, setSearchMarker]= useState(false)
    const [searchSelected, setSearchSelected]= useState({lat:'', lng: ''})

    const [infoShow, setInfoShow]= useState(false)
    const[selectedAddr, setSelectedAddr]= useState("")
    const [selected, setSelected] = useState({lat:'', lng: ''})

    Geocode.fromLatLng(selected.lat,selected.lng).then(
        response => {
            const address = response.results[0].formatted_address;
            setSelectedAddr(address)
            console.log(address);
        },
        error => {
            console.error(error);
        }
    );
    const onSelect = item => {
        setInitialSelected(item);
    }
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyCrQuKKwt0DtPF8vxKPx6dRq3us6me2LO8",
        libraries,
    });
    const [markers, setMarkers] = React.useState([]);


    const [initialSelected,setInitialSelected ]= useState({});

    const onMapClick = React.useCallback((e) => {
        setMarkers((current) => [
            ...current,
            {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
                time: new Date(),
            },
        ]);
    }, []);

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = React.useCallback(({ lat, lng }) => {  //<Search panTo <- 여기로
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
    }, []);

    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";

    return (
        <>
            <div>
                <form
                    className="needs-validation"
                    noValidate
                    style={{padding:'4rem', margin:'0 auto', maxWidth:800}}
                >
                        <MDBCol md="8" className="mb-3">
                            <h2> 문강태님 회원정보</h2>

                            <label
                                htmlFor="defaultFormRegisterNameEx"
                            >
                                이름
                            </label>
                            <input
                                name="fname"
                                type="text"
                                id="defaultFormRegisterNameEx"
                                className="form-control"
                                required
                                value="문강태"
                            />

                            <label
                                htmlFor="defaultFormRegisterNameEx"
                            >
                                아이디
                            </label>
                            <input
                                name="fname"
                                type="text"
                                id="defaultFormRegisterNameEx"
                                className="form-control"
                                required
                                value="Izzy2020"
                            />
                            <label
                                htmlFor="defaultFormRegisterNameEx"
                            >
                                연락처
                            </label>
                            <input
                                name="fname"
                                type="text"
                                id="defaultFormRegisterNameEx"
                                className="form-control"
                                required
                                value="010-0000-0000"
                            />
                            <label
                                htmlFor="defaultFormRegisterNameEx"
                            >
                                희망 거래 물품
                            </label>
                            <textarea
                                name="fname"
                                type="text"
                                id="defaultFormRegisterNameEx"
                                className="form-control"
                                required
                                value="이사를 가게 되어 원형식탁을 급 처분합니다.
                                거래 위치는 지도에 표시했습니다.연락주세요 "
                            />

                            <label
                                htmlFor="defaultFormRegisterNameEx"
                            >거주지
                            </label>

                            <input
                                name="fname"
                                type="text"
                                id="defaultFormRegisterNameEx"
                                className="form-control"
                                required
                                value="인천광역시 옥련2동 럭키아파트"
                            />
                            <br/><br/>

                            <Locate panTo={panTo} />
                            <Search panTo={panTo} setPosition={setSearchSelected} setMarkerShow={setSearchMarker}/>

                            <GoogleMap
                                id="map"
                                mapContainerStyle={mapContainerStyle}
                                zoom={14}
                                center={center}
                                options={options}
                                onClick={onMapClick}
                                onLoad={onMapLoad}
                            >
                                {
                                    searchMarker &&
                                    <Marker position={searchSelected}
                                            icon={{
                                                url: `/movingCar.png`,
                                                origin: new window.google.maps.Point(0, 0),
                                                anchor: new window.google.maps.Point(15, 15),
                                                scaledSize: new window.google.maps.Size(30, 30),
                                            }}>
                                    </Marker>

                                }
                                <Marker position={center}
                                        icon={{
                                            url: `/home.svg`,
                                            origin: new window.google.maps.Point(0, 0),
                                            anchor: new window.google.maps.Point(15, 15),
                                            scaledSize: new window.google.maps.Size(45, 45),
                                        }}/>
                                {
                                    locations.map(item => {
                                        return (
                                            <Marker key={item.name} position={item.location}
                                                    onClick={()=>onSelect(item)}
                                                    icon={{
                                                        url: `/movingCar.png`,
                                                        origin: new window.google.maps.Point(0, 0),
                                                        anchor: new window.google.maps.Point(15, 15),
                                                        scaledSize: new window.google.maps.Size(30, 30),
                                                    }}>
                                                <p >{selectedAddr} </p> </Marker>
                                        )
                                    })
                                }
                                {
                                    initialSelected.location &&
                                    (
                                        <InfoWindow
                                            position={initialSelected.location}
                                            clickable={true}
                                            onCloseClick={()=>setInitialSelected({})}
                                        >
                                            <h5>{initialSelected.name}</h5>

                                        </InfoWindow>
                                    )
                                }

                                {markers.map((marker) => (
                                    <Marker
                                        key={`${marker.lat}-${marker.lng}`}
                                        position={{ lat: marker.lat, lng: marker.lng }}
                                        onClick={() => {
                                            setSelected(marker);
                                            setInfoShow(true)
                                        }}
                                        icon={{
                                            url: `/movingCar.png`,
                                            origin: new window.google.maps.Point(0, 0),
                                            anchor: new window.google.maps.Point(15, 15),
                                            scaledSize: new window.google.maps.Size(30, 30),
                                        }}
                                    />
                                ))}
                                {infoShow ? (
                                    <InfoWindow
                                        position={{ lat: selected.lat, lng: selected.lng }}
                                        onCloseClick={() => {
                                            setInfoShow(false);
                                        }}
                                    >
                                        <div>
                                            <h4>
                                                   <span role="img" aria-label="bear">
                                                    주소
                                                   </span>

                                            </h4>
                                            <p >{selectedAddr} </p>
                                        </div>
                                    </InfoWindow>
                                ) : null}
                            </GoogleMap>
                            <MDBCol>
                                <MDBCard style={{ width: "22rem" }}>
                                    <MDBCardImage className="img-fluid" src="https://cdn.ownerclan.com/kJb7r6jmdr3QmT7iBK4aoZ5_Lrm1FtqyFXOsgFzVwVM/marketize/640/as/v1.jpg" waves />
                                    <MDBCardBody>
                                        <MDBCardTitle> 원형탁자 입니다.</MDBCardTitle>
                                        <MDBCardText>
                                            거의 새거나 다름없습니다
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>

                        </MDBCol>
                </form>
            </div>
        </>
    )
}
function Locate({ panTo }) {
    return (
        <button
            className="locate"
            onClick={(e) => {
                e.preventDefault()
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        panTo({
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        });
                    },
                    () => null
                );
            }}
        >
            <img src="/compass.svg" alt="compass" />
        </button>
    );
}
function Search({ panTo, setPosition,setMarkerShow }) {
    const {ready, value, suggestions: { status, data }, setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => 43.6532, lng: () => -79.3832 }, // 검색할때의 이 지점에서부터 찾는?
            radius: 100 * 1000,
        },
    });
    // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

    const handleInput = (e) => {
        // Update the keyword of the input element
        setValue(e.target.value);
    };

    const handleSelect = async (address) => {
        // When user selects a place, we can replace the keyword without request data from API
        // by setting the second parameter as "false"
        setValue(address, false);
        clearSuggestions();

        try {
            const results = await getGeocode({ address });
            // console.log(results[0]) formatted address, compo 전부 가져옴
            const { lat, lng } = await getLatLng(results[0]);
            console.log(address)
            console.log(lat,lng)
            panTo({ lat, lng });
            setPosition({lat,lng})
            setMarkerShow(true)

        } catch (error) {
            console.log("😱 Error: ", error);
        }
    };

    return (
        <div className="search">
            <Combobox onSelect={handleSelect}>
                <br/>
                <ComboboxInput
                    value={value}
                    onChange={handleInput}
                    disabled={!ready}
                    placeholder="위치 검색"
                />
                <ComboboxPopover>
                    <ComboboxList>
                        {status === "OK" &&
                        data.map(({ id, description }) => (
                            <ComboboxOption key={id} value={description} />
                        ))}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </div>
    );
}
export default CustomerInfoMarket;