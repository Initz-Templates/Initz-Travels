import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Typography
} from '@mui/material';

const BookingForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    date: ''
  });
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsConfirmed(true);
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Booking Form</DialogTitle>
      <DialogContent>
        {!isConfirmed ? (
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              margin="dense"
              label="Name"
              name="name"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              required
            />
            <TextField
              margin="dense"
              label="Email"
              name="email"
              type="email"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              margin="dense"
              label="Phone"
              name="phone"
              type="tel"
              fullWidth
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <TextField
              autoFocus
              margin="dense"
              label="Address"
              name="address"
              fullWidth
              value={formData.address}
              onChange={handleChange}
              required
            />
            <TextField
              autoFocus
              margin="dense"
              label="Expected Date"
              name="date"
              fullWidth
              value={formData.date}
              onChange={handleChange}
              required
            />
            <DialogActions>
              <Button onClick={onClose} color="secondary">Cancel</Button>
              <Button type="submit" color="primary">Submit</Button>
            </DialogActions>
          </form>
        ) : (
          <div>
            <Typography variant="h6">Your booking is confirmed!</Typography>
            <DialogActions>
              <Button onClick={onClose} color="primary">Close</Button>
            </DialogActions>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingForm;
