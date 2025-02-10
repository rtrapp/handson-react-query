import React from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import {
  Card,
  CardContent,
  Typography,
  Button,
  CircularProgress,
  Alert,
} from '@mui/material';

interface GuidData {
  guid: string; 
}

const fetchGuid = async (): Promise<GuidData> => {
  const response = await fetch('http://localhost:3333/api/guid');
  if (!response.ok) {
    throw new Error('Failed to fetch GUID');
  }
  return response.json();
};

const GuidComponent: React.FC = () => {
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery<GuidData>({queryKey: ['guid'], queryFn: fetchGuid});

  const handleInvalidate = () => {
    queryClient.invalidateQueries({queryKey: ['guid']});
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          GUID
        </Typography>
        {isLoading && <CircularProgress />}
        {error && error instanceof Error && (
          <Alert severity="error">{error.message}</Alert>
        )}
        {data && (
          <Typography variant="body1" sx={{ mb: 2 }}>
            {data.guid}
          </Typography>
        )}
        <Button variant="contained" color="primary" onClick={handleInvalidate}>
          Invalidate GUID Query
        </Button>
      </CardContent>
    </Card>
  );
};

export default GuidComponent;
