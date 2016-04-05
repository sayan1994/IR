#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// <executable> <url>  e.g. ./a.out t3_1a0klp    (url DOES NOT contain any extension)
int main( int argc, char *argv[])
{
	char str[200];
	strcpy(str,argv[1]);
	char path1_init[200] = {"./public/data/ama_main/"}, path2_init[200] = {"./public/data/train_jsons/"};
	strcat( path1_init, str);
	strcat( path1_init, ".jsons");
	strcat( path2_init, str);
	strcat( path2_init, ".jsons");
	FILE *fp1_from, *fp2_from, *fp1_to, *fp2_to;
	fp1_from = fopen( path1_init, "r");
	fp2_from = fopen( path2_init, "r");
	fp1_to = fopen( "AMA_main.jsons", "w" );
	fp2_to = fopen( "posts.jsons", "w");
	char c = fgetc( fp1_from);
    while (c != EOF)
    {
        fputc( c, fp1_to);
        c = fgetc( fp1_from);
    }

	c = fgetc( fp2_from);
    while (c != EOF)
    {
        fputc( c, fp2_to);
        c = fgetc( fp2_from);
    }
    fclose( fp1_from);
    fclose( fp1_to);
    fclose( fp2_from);
    fclose( fp2_to);
	return 0;
}