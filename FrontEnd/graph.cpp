#include <bits/stdc++.h>
//#include <ext/pb_ds/assoc_container.hpp>
//#include <ext/pb_ds/tree_policy.hpp>

//using namespace __gnu_pbds;
using namespace std;

#pragma comment(linker, "/STACK:16777216")

#define Foreach(i, c) for(__typeof((c).begin()) i = (c).begin(); i != (c).end(); ++i)
#define For(i,a,b) for(int (i)=(a);(i) < (b); ++(i))
#define rof(i,a,b) for(int (i)=(a);(i) > (b); --(i))
#define rep(i, c) for(auto &(i) : (c))
#define x first
#define y second
#define pb push_back
#define mp make_pair
#define PB pop_back()
#define iOS ios_base::sync_with_stdio(false)
#define sqr(a) (((a) * (a)))
#define pow2(a) (((a) * (a)))
#define all(a) a.begin() , a.end()
#define error(x) cerr << #x << " = " << (x) <<endl
#define Error(a,b) cerr<<"( "<<#a<<" , "<<#b<<" ) = ( "<<(a)<<" , "<<(b)<<" )\n";
#define errop(a) cerr<<#a<<" = ( "<<((a).x)<<" , "<<((a).y)<<" )\n";
#define coud(a,b) cout<<fixed << setprecision((b)) << (a)
#define L(x) (((x)<<1)+1)
#define R(x) (((x)<<1)+2)
#define umap unordered_map
//#define double long double
#define mod 1000000007
#define mod1 1000000009
#define LIMIT 10000000000000000LL
#define MAX1 1000000000
//#define si(n) scanf("%d",&n)
//#define sii(n,m) scanf("%d%d",&n,&m)
//#define pi(n) printf("%d\n",n)
const int inf=0x3f3f3f3f;
const long double pi=acos(-1.0);
#define INF 1000000000000000000LL
#define MAX 1000005
#define N 410
const string debug_line="yolo";
#define debug error(debug_line)
const double PI=4*atan(1);
#define read() freopen("mergedoutput.txt","r",stdin)
#define write() freopen("output.txt","w",stdout)
//template <typename T> using os =  tree<T, null_type, less<T>, rb_tree_tag, tree_order_statistics_node_update>;
typedef long long ll;
typedef pair<int,int>pii;
typedef vector<int> vi;
typedef complex<double> point;
#define NUM 800
char authors[NUM][50];
char comment_id[NUM][50];
char parent_id[NUM][50];
int level[NUM];
map<string,int> mp1;
map<string,int> mp2;
map<string,int> mp3;
map<int,string> mpr1;
vector<pair<string,string> > answer_thread;
int c1,c2,c3;
vector<pair<int,string> > adj[NUM];
int vis[NUM];
int max_ind;
string comments[NUM];
void dfs(int s,int p)
{
    //printf("%d %ld\n",s,adj[s].size());
    vis[s]=1;
    int m=0;
    for(int i=0;i<adj[s].size();i++)
    {
        if(vis[adj[s][i].first]==0)
        {
            dfs(adj[s][i].first,s);
            m=m>level[adj[s][i].first]?m:level[adj[s][i].first];
            //printf("#####%d\n",m);
        }
    }
    if(adj[s].size()==0)
    {
        level[s]=0;
        return ;
    }
    else
    {
        level[s]=m+1;
    }
}
// void dfs_find_maxindent(int s,int p)
// {
//     //printf("%d %ld\n",s,adj[s].size());
//     vis[s]=1;
//     if(level[s]==14)
//     {
//        // printf("%d\n",s);
//     }
//     int m=0;
//     for(int i=0;i<adj[s].size();i++)
//     {
//         if(vis[adj[s][i].first]==0)
//         {
//             dfs_find_maxindent(adj[s][i].first,s);
//         //    m=m>level[adj[s][i].first]?m:level[adj[s][i].first];
//             //printf("#####%d\n",m);
//         }
//     }

// }
void dfs_mark_subtree(int s,string parent)
{
    vis[s]=1;
    if(mpr1[s]!=parent)
     answer_thread.pb(mp(mpr1[s],parent));
    for(int i=0;i<adj[s].size();i++)
    {
        if(vis[adj[s][i].first]==0)
        {
            dfs_mark_subtree(adj[s][i].first,parent);
        }
    }
}
int main(int argc,char *argv[])
{
    c1=0;c2=0;c3=0;
    for(int i=0;i<NUM;i++)
    {
        level[i]=0;
        vis[i]=0;
    }
    FILE *fp=fopen("details.txt","r");
    char *buf=(char *)malloc(200*sizeof(buf));
    int k=0;
    while(fgets(buf,200,fp)!=NULL)
    {
        //printf("%s",buf);
        int i=0,j=0;
        while(buf[i]!=' ')
        {
            comment_id[k][j++]=buf[i++];

        }
        comment_id[k][j]='\0';
        i+=4;j=0;
        while(buf[i]!=' ')
        {
            parent_id[k][j++]=buf[i++];
            //printf("$$$%c",parent_id[k][j-1]);
        }
        parent_id[k][j]='\0';
        i++;j=0;
        while(buf[i]!='\n')
        {
        authors[k][j++]=buf[i++];
        }
        authors[k][j]='\0';
        //printf("%s %s %s\n",comment_id[k],parent_id[k],authors[k]);
        if(mp1.count(comment_id[k])==0)
        {
            comments[c1]=comment_id[k];
            mpr1[c1]=comment_id[k];
            mp1[comment_id[k]]=c1++;
        }
        if(mp1.count(parent_id[k])==0)
        {
            comments[c1]=comment_id[k];
            mpr1[c1]=parent_id[k];
            mp1[parent_id[k]]=c1++;
        }
        if(mp3.count(authors[k])==0)
        {
            mp3[authors[k]]=c3++;
        }
        k++;
    }
    fclose(fp);
   // printf("%d %d %d\n",c1,c2,c3);
    int root=mp1[argv[1]+3];
    // printf("%d--\n",root);
    for(int i=0;i<k;i++)
    {
        adj[mp1[parent_id[i]]].pb(mp(mp1[comment_id[i]],authors[i]));
        //printf("%d\n",i);
    }
    dfs(root,-1);
    for(int i=0;i<NUM;i++)
    {
        vis[i]=0;
    }
   // dfs_find_maxindent(root,-1);
    //cout<<comments[46];
    
    for(int i=0;i<adj[root].size();i++)
    {
        // printf("%d child is ",i);
        // cout<<mpr1[adj[root][i].first]<<" "<<adj[root][i].second<<"\n";
        for(int j=0;j<NUM;j++)
        {
            vis[j]=0;
        }
        dfs_mark_subtree(adj[root][i].first,mpr1[adj[root][i].first]);
    }
    for(int i=0;i<answer_thread.size();i++)
    {
        cout<<answer_thread[i].first<<" "<<answer_thread[i].second<<endl;
    }
    //printf("%d\n",level[root]);
    //printf("%d %d\n",adj[] );
}
