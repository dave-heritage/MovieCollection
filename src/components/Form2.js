import React from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useForm, Controller } from 'react-hook-form';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const Form2 = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('VHS');
  const { handleSubmit, control } = useForm();

  const onSubmit = data => {
    console.log(data);
  };


  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="title"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Title"
            variant="filled"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
        rules={{ required: 'Title required' }}
      />
      <Controller
        name="year"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Year"
            variant="filled"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            type="number"
          />
        )}
        rules={{ required: 'Year required', min: 1800, max: 2100 }}
      />
      <Controller
        name="format"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormControl>
                <FormLabel>Format</FormLabel>
                <RadioGroup
                    defaultValue="VHS"
                    name="radio-buttons-group"
                    value={value}
                    onChange={handleRadioChange}
                    row
                >
                    <FormControlLabel value="VHS" style={{color: "black"}} control={<Radio />} label="VHS" />
                    <FormControlLabel value="DVD" style={{color: "black"}} control={<Radio />} label="DVD" />
                    <FormControlLabel value="Streaming" style={{color: "black"}} control={<Radio />} label="Streaming" />
                </RadioGroup>
            </FormControl>
        )}
      />
      <Controller
        name="length"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Length"
            variant="filled"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            type="number"
          />
        )}
        rules={{ required: 'Length required', min: 0, max: 500 }}
      />
      <Controller
        name="rating"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Rating"
            variant="filled"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            type="number"
          />
        )}
        rules={{ required: 'rating required', min: 1, max: 5 }}
      />
      <div>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Form2;