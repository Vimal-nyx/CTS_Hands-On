import java.util.Arrays;

public class Search {
    
    static class Product implements Comparable<Product> {
        int id;
        String name;
        String category;

        Product(int id, String name, String category) {
            this.id = id;
            this.name = name;
            this.category = category;
        }

        @Override
        public int compareTo(Product other) {
            return Integer.compare(this.id, other.id);
        }

        @Override
        public String toString() {
            return id + ": " + name + " (" + category + ")";
        }
    }

    public static void main(String[] args) {
        Product[] catalog = {
            new Product(105, "Goku Figure", "Figures"),
            new Product(102, "Death Note", "Stationery"),
            new Product(108, "Survey Corps Cloak", "Cosplay"),
            new Product(101, "Demon Slayer Katana", "Collectibles"),
            new Product(104, "Luffy Straw Hat", "Apparel"),
            new Product(107, "Evangelion Unit-01", "Model Kits")
        };

        // linear search (can search unsorted list)
        System.out.println("Linear Search: " + linearSearch(catalog, 107));

        // binary search (must sort the list first)
        Arrays.sort(catalog);
        System.out.println("Binary Search: " + binarySearch(catalog, 107));
    }

    // linear search - scans item by item
    static Product linearSearch(Product[] list, int targetId) {
        for (int i = 0; i < list.length; i++) {
            // best case: target is the very first item - O(1)
            // worst case: target is at the end or not in list - O(n)
            if (list[i].id == targetId) {
                return list[i];
            }
        }
        return null;
    }

    // binary search - divides list in half repeatedly
    static Product binarySearch(Product[] list, int targetId) {
        int low = 0;
        int high = list.length - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2;
            
            // best case: target is exactly in the middle - O(1)
            if (list[mid].id == targetId) {
                return list[mid];
            }
            
            // worst case: target is at the far ends or not there - O(log n)
            if (list[mid].id < targetId) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return null;
    }
}
