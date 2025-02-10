import React from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Alert,
} from '@mui/material';

interface LoopData {
  dateTime: string; 
}

const fetchLoopValue = async (): Promise<LoopData> => {
  const response = await fetch('http://localhost:3333/api/loop');
  if (!response.ok) {
    throw new Error('Failed to fetch loop value');
  }
  return response.json();
};

const errorLog = async (error: Error) => {
    console.error(error);
};

const LoopComponent: React.FC = () => {
  const { data, error, isLoading } = useQuery<LoopData>({
    queryKey: ['loop'],
    queryFn: fetchLoopValue,
    refetchInterval: 1000,
  });

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Loop Value
        </Typography>
        {isLoading && <CircularProgress />}
        {error && error instanceof Error && (
          <Alert severity="error">{error.message}</Alert>
        )}
        {data && (
          <Typography variant="body1">
            {data.dateTime}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default LoopComponent;
