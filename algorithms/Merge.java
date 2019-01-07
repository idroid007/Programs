package algorithms;

public class Merge {

	void merge(int[] l,int[] r,int a[]) {
	
		int i=0,j=0,k=0;
		int left = l.length;
		int right = r.length;
		while(i<left && j<right) {
			if(l[i]<=r[j]) {
				a[k]=l[i];
				i++;
			}else {
				a[k]=r[j];
				j++;
			}
			k++;
		}
		
		while(i<left) {
			a[k]=l[i];
			i++;
			k++;
		}
		while(j<right) {
			a[k]=r[j];
			j++;
			k++;
		}
	
	
	}
	
	void mergeSort(int a[]) {
		int n= a.length;
		if(n<2)
			return;
		
		int mid= n/2;
		int l[] = new int[mid];
		int r[]= new int[n - mid];
		
		int i=0;
		for(;i<mid;i++)
			l[i]=a[i];
	
		for(i=mid;i<n;i++) 
			r[i-mid]=a[i];
			
		
	
		
		mergeSort(l);
		mergeSort(r);
		merge(l,r,a);
	}
	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
int[] arr = {3,4,5,3,2,5,7,6};
 new Merge().mergeSort(arr);
 System.out.println("final");
 for(int x:arr) {
	 System.out.print(x +" ");
 }


}
}
