import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
    const token = localStorage.getItem("token");

    // MEMBERS
    const [members, setMembers] = useState([]);
    const [memberData, setMemberData] = useState({
        name: "",
        role: "",
    });
    const [editingMemberId, setEditingMemberId] = useState(null);

    // EVENTS
    const [events, setEvents] = useState([]);
    const [eventData, setEventData] = useState({
        title: "",
        description: "",
        location: "",
        date: "",
        images: [],
    });
    const [selectedFile, setSelectedFile] = useState(null);
    const [editingEventId, setEditingEventId] = useState(null);

    // FETCH MEMBERS
    const fetchMembers = async () => {
        try {
            const res = await api.get("/members");
            setMembers(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    // FETCH EVENTS
    const fetchEvents = async () => {
        try {
            const res = await api.get("/events");
            setEvents(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    //ADD EDIT MEMBER
    const addMember = async (e) => {
        e.preventDefault();

        if (editingMemberId) {
            try {
                await api.put(
                    `/members/${editingMemberId}`,
                    memberData,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                setEditingMemberId(null);

                setMemberData({
                    name: "",
                    role: "",
                });

                fetchMembers();

                return;
            } catch (err) {
                console.error(err);
            }
        }

        try {
            await api.post(
                "/members",
                memberData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setMemberData({
                name: "",
                role: "",
            });

            fetchMembers();
        } catch (err) {
            console.error(err);
        }
    };

    const cancelMemberEdit = () => {
        setEditingMemberId(null);

        setMemberData({
            name: "",
            role: "",
        });
    };

    // DELETE MEMBER
    const deleteMember = async (id) => {
        try {
            await api.delete(`/members/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            fetchMembers();
        } catch (err) {
            console.error(err);
        }
    };

    //ADD EVENT
    const addEvent = async (e) => {
        e.preventDefault();

        if (editingEventId) {
            try {
                await api.put(
                    `/events/${editingEventId}`,
                    eventData,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                setEditingEventId(null);

                setEventData({
                    title: "",
                    description: "",
                    location: "",
                    date: "",
                    images: [],
                });

                fetchEvents();

                return;
            } catch (err) {
                console.error(err);
            }
        }

        try {
            await api.post(
                "/events",
                eventData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setEventData({
                title: "",
                description: "",
                location: "",
                date: "",
                images: [],
            });

            setSelectedFile(null);

            fetchEvents();
        } catch (err) {
            console.error(err);
        }
    };

    const cancelEventEdit = () => {
        setEditingEventId(null);

        setEventData({
            title: "",
            description: "",
            location: "",
            date: "",
            images: [],
        });

        setSelectedFile(null);
    };
    // DELETE EVENT
    const deleteEvent = async (id) => {
        try {
            await api.delete(`/events/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            fetchEvents();
        } catch (err) {
            console.error(err);
        }
    };

    const uploadImage = async () => {
        if (!selectedFile) return;

        try {
            const formData = new FormData();

            formData.append(
                "image",
                selectedFile
            );

            const res = await api.post(
                "/upload",
                formData,
                {
                    headers: {
                        "Content-Type":
                            "multipart/form-data",
                    },
                }
            );

            setEventData((prev) => ({
                ...prev,
                images: [
                    ...prev.images,
                    res.data.imageUrl,
                ],
            }));

            setSelectedFile(null);

            alert("Image uploaded successfully");
        } catch (err) {
            console.error(err);
            alert("Upload failed");
        }
    };

    useEffect(() => {
        fetchMembers();
        fetchEvents();
    }, []);

    //LOGOUT
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("token");
        navigate("/admin");
    };

    return (
        <>
            <button onClick={logout}>
                Logout
            </button>
            <div>
                <h1>Admin Dashboard</h1>

                <hr />

                <h2>Members</h2>

                <form onSubmit={addMember}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={memberData.name}
                        onChange={(e) =>
                            setMemberData({
                                ...memberData,
                                name: e.target.value,
                            })
                        }
                    />

                    <input
                        type="text"
                        placeholder="Role"
                        value={memberData.role}
                        onChange={(e) =>
                            setMemberData({
                                ...memberData,
                                role: e.target.value,
                            })
                        }
                    />

                    <button type="submit">
                        {editingMemberId
                            ? "Update Member"
                            : "Add Member"}
                    </button>
                    {editingMemberId && (
                        <button
                            type="button"
                            onClick={cancelMemberEdit}
                        >
                            Cancel
                        </button>
                    )}
                </form>

                {members.map((member) => (
                    <div key={member._id}>
                        <p>
                            {member.name} - {member.role}
                        </p>
                        <button
                            onClick={() => {
                                setEditingMemberId(member._id);

                                setMemberData({
                                    name: member.name,
                                    role: member.role,
                                });
                            }}
                        >
                            Edit
                        </button>
                        <button
                            onClick={() =>
                                deleteMember(member._id)
                            }
                        >
                            Delete
                        </button>
                    </div>
                ))}

                <hr />

                <h2>Events</h2>

                <form onSubmit={addEvent}>
                    <input
                        type="text"
                        placeholder="Title"
                        value={eventData.title}
                        onChange={(e) =>
                            setEventData({
                                ...eventData,
                                title: e.target.value,
                            })
                        }
                    />

                    <input
                        type="text"
                        placeholder="Description"
                        value={eventData.description}
                        onChange={(e) =>
                            setEventData({
                                ...eventData,
                                description: e.target.value,
                            })
                        }
                    />

                    <input
                        type="text"
                        placeholder="Location"
                        value={eventData.location}
                        onChange={(e) =>
                            setEventData({
                                ...eventData,
                                location: e.target.value,
                            })
                        }
                    />
                    <input
                        type="file"
                        onChange={(e) =>
                            setSelectedFile(
                                e.target.files[0]
                            )
                        }
                    />
                    <input
                        type="date"
                        value={eventData.date}
                        onChange={(e) =>
                            setEventData({
                                ...eventData,
                                date: e.target.value,
                            })
                        }
                    />

                    <button
                        type="button"
                        onClick={uploadImage}
                    >
                        Upload Image
                    </button>

                    <div>
                        {eventData.images.map(
                            (img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Preview ${index}`}
                                    width="100"
                                />
                            )
                        )}
                    </div>

                    <button type="submit">
                        {editingEventId
                            ? "Update Event"
                            : "Add Event"}
                    </button>
                    {editingEventId && (
                        <button
                            type="button"
                            onClick={cancelEventEdit}
                        >
                            Cancel
                        </button>
                    )}
                </form>

                {events.map((event) => (
                    <div key={event._id}>
                        <p>{event.title}</p>
                        <p>{event.location}</p>


                        <button
                            onClick={() => {
                                setEditingEventId(event._id);

                                setEventData({
                                    title: event.title,
                                    description: event.description,
                                    location: event.location,
                                    date: event.date
                                        ? event.date.split("T")[0]
                                        : "",
                                    images: event.images || [],
                                });
                            }}
                        >
                            Edit
                        </button>

                        <button
                            onClick={() =>
                                deleteEvent(event._id)
                            }
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default AdminDashboard;
