import static org.mockito.Mockito.*;
import static org.junit.Assert.assertEquals;
import org.junit.Test;
public class MyServiceTest 
{
    @Test
    public void testExternalApi() 
    {
        // Exercise 1
        ExternalApi mockApi = mock(ExternalApi.class);
        when(mockApi.getData()).thenReturn("Mock Data");
        MyService service = new MyService(mockApi);
        String result = service.fetchData();
        assertEquals("Mock Data", result);
    }
    @Test
    public void testVerifyInteraction() 
    {
        // Exercise 2
        ExternalApi mockApi = mock(ExternalApi.class);
        MyService service = new MyService(mockApi);
        service.fetchData();
        verify(mockApi).getData();
    }
}
